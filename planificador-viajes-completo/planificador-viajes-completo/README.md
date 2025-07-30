# 🗺️ Planificador de Viajes - Backend

Un sistema completo de planificación de viajes construido con NestJS, TypeORM y PostgreSQL.

## 🚀 Características

- ✅ **Gestión de usuarios** con autenticación JWT
- ✅ **Lugares turísticos** con geolocalización
- ✅ **Rutas de viaje** con fechas y estado
- ✅ **Actividades** dentro de las rutas
- ✅ **Notas personales** del viaje
- ✅ **API RESTful** completa
- ✅ **Base de datos PostgreSQL** con TypeORM

## 📋 Prerrequisitos

- Node.js (v16 o superior)
- PostgreSQL (v12 o superior)
- npm o yarn

## 🛠️ Instalación

### 1. Clonar el repositorio
```bash
git clone <tu-repositorio>
cd planificador-viajes-completo
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
# Copiar el archivo de ejemplo
cp env.example .env

# Editar el archivo .env con tus credenciales
```

### 4. Configurar la base de datos PostgreSQL

#### Opción A: Usando pgAdmin
1. Abre pgAdmin
2. Crea una nueva base de datos llamada `planificador_viajes`
3. Asegúrate de que el usuario tenga permisos completos

#### Opción B: Usando línea de comandos
```sql
-- Conectar a PostgreSQL
psql -U postgres

-- Crear la base de datos
CREATE DATABASE planificador_viajes;

-- Verificar que se creó
\l

-- Salir
\q
```

### 5. Configurar el archivo .env
```env
# Base de datos
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_contraseña_aqui
DB_DATABASE=planificador_viajes

# JWT
JWT_SECRET=tu-super-secret-jwt-key-cambia-en-produccion

# Aplicación
PORT=3000
NODE_ENV=development
```

## 🏃‍♂️ Ejecutar el proyecto

### Desarrollo
```bash
npm run start:dev
```

### Producción
```bash
npm run build
npm run start
```

## 📊 Estructura de la Base de Datos

El proyecto creará automáticamente las siguientes tablas:

### `users`
- `id` (UUID, Primary Key)
- `email` (VARCHAR, Unique)
- `password` (VARCHAR)
- `name` (VARCHAR)
- `bio` (VARCHAR, Optional)
- `avatar` (VARCHAR, Optional)
- `isActive` (BOOLEAN)
- `createdAt` (TIMESTAMP)
- `updatedAt` (TIMESTAMP)

### `places`
- `id` (UUID, Primary Key)
- `name` (VARCHAR)
- `province` (VARCHAR)
- `city` (VARCHAR)
- `category` (VARCHAR)
- `description` (VARCHAR)
- `latitude` (FLOAT)
- `longitude` (FLOAT)
- `address` (VARCHAR, Optional)
- `phone` (VARCHAR, Optional)
- `website` (VARCHAR, Optional)
- `imageUrl` (VARCHAR, Optional)
- `rating` (FLOAT)
- `isActive` (BOOLEAN)
- `createdAt` (TIMESTAMP)
- `updatedAt` (TIMESTAMP)

### `routes`
- `id` (UUID, Primary Key)
- `name` (VARCHAR)
- `description` (VARCHAR, Optional)
- `startDate` (DATE)
- `endDate` (DATE)
- `status` (VARCHAR)
- `isPublic` (BOOLEAN)
- `totalDistance` (FLOAT, Optional)
- `estimatedBudget` (FLOAT, Optional)
- `isActive` (BOOLEAN)
- `createdAt` (TIMESTAMP)
- `updatedAt` (TIMESTAMP)
- `userId` (UUID, Foreign Key)

### `activities`
- `id` (UUID, Primary Key)
- `name` (VARCHAR)
- `date` (TIMESTAMP)
- `description` (VARCHAR, Optional)
- `note` (VARCHAR, Optional)
- `status` (VARCHAR)
- `cost` (FLOAT, Optional)
- `type` (VARCHAR, Optional)
- `duration` (INTEGER, Optional)
- `location` (VARCHAR, Optional)
- `isActive` (BOOLEAN)
- `createdAt` (TIMESTAMP)
- `updatedAt` (TIMESTAMP)
- `routeId` (UUID, Foreign Key)
- `placeId` (UUID, Foreign Key, Optional)

### `notes`
- `id` (UUID, Primary Key)
- `title` (VARCHAR)
- `content` (VARCHAR)
- `category` (VARCHAR, Optional)
- `isImportant` (BOOLEAN)
- `isActive` (BOOLEAN)
- `createdAt` (TIMESTAMP)
- `updatedAt` (TIMESTAMP)
- `userId` (UUID, Foreign Key)
- `routeId` (UUID, Foreign Key, Optional)
- `activityId` (UUID, Foreign Key, Optional)

## 🔗 Endpoints de la API

### Autenticación
- `POST /auth/login` - Iniciar sesión
- `POST /auth/register` - Registrarse

### Usuarios
- `GET /users` - Listar usuarios
- `GET /users/:id` - Obtener usuario
- `POST /users` - Crear usuario
- `PUT /users/:id` - Actualizar usuario
- `DELETE /users/:id` - Eliminar usuario

### Lugares
- `GET /places` - Listar lugares
- `GET /places?category=naturaleza` - Filtrar por categoría
- `GET /places/:id` - Obtener lugar
- `POST /places` - Crear lugar
- `PUT /places/:id` - Actualizar lugar
- `DELETE /places/:id` - Eliminar lugar

### Rutas
- `GET /routes` - Listar rutas
- `GET /routes?userId=123` - Rutas de un usuario
- `GET /routes/:id` - Obtener ruta
- `POST /routes` - Crear ruta
- `PUT /routes/:id` - Actualizar ruta
- `DELETE /routes/:id` - Eliminar ruta

### Actividades
- `GET /activities` - Listar actividades
- `GET /activities?routeId=123` - Actividades de una ruta
- `GET /activities/:id` - Obtener actividad
- `POST /activities` - Crear actividad
- `PUT /activities/:id` - Actualizar actividad
- `DELETE /activities/:id` - Eliminar actividad

### Notas
- `GET /notes` - Listar notas
- `GET /notes?userId=123` - Notas de un usuario
- `GET /notes?routeId=123` - Notas de una ruta
- `GET /notes/:id` - Obtener nota
- `POST /notes` - Crear nota
- `PUT /notes/:id` - Actualizar nota
- `DELETE /notes/:id` - Eliminar nota

## 🧪 Probar la API

### 1. Crear un usuario
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "password": "123456"
  }'
```

### 2. Iniciar sesión
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan@example.com",
    "password": "123456"
  }'
```

### 3. Crear un lugar
```bash
curl -X POST http://localhost:3000/places \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Playa del Carmen",
    "province": "Quintana Roo",
    "city": "Playa del Carmen",
    "category": "naturaleza",
    "description": "Hermosa playa del Caribe mexicano",
    "latitude": 20.6296,
    "longitude": -87.0739
  }'
```

## 🔧 Scripts disponibles

- `npm run start` - Ejecutar en producción
- `npm run start:dev` - Ejecutar en desarrollo con hot reload
- `npm run build` - Compilar el proyecto
- `npm run test` - Ejecutar tests
- `npm run format` - Formatear código

## 🚨 Notas importantes

1. **Cambia la contraseña de la base de datos** en el archivo `.env`
2. **Cambia el JWT_SECRET** en producción
3. **Desactiva `synchronize: true`** en producción
4. **Configura un firewall** para la base de datos en producción
5. **Usa HTTPS** en producción

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. 