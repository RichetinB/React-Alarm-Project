# React-Alarm-Project

Projet full-stack avec NestJS (backend) et Expo (frontend mobile).

## 🚀 Installation & Démarrage

### Avec Docker Compose (Recommandé)

```bash
# Démarrer tous les services (Expo, NestJS, PostgreSQL)
docker compose up

# Démarrer en arrière-plan
docker compose up -d

# Arrêter les services
docker compose down

# Reconstruire les images
docker compose up --build
```

### Local (sans Docker)

**Backend NestJS:**

```bash
cd backend-nest
npm install
npm run start:dev
```

**Frontend Expo:**

```bash
cd Frontend-Expo
npm install
npm start
```

## 📦 Commandes Prisma

```bash
# Créer/appliquer une nouvelle migration
npx prisma migrate dev --name "description"

# Voir l'état des migrations
npx prisma migrate status

# Réinitialiser la DB (dev only)
npx prisma migrate reset

# Ouvrir Prisma Studio
npx prisma studio

# Générer le client Prisma
npx prisma generate
```

## 📝 Architecture

- **Backend:** `backend-nest/` - NestJS API (port 3000)
- **Frontend:** `Frontend-Expo/` - Expo React Native (port 19000)
- **DB:** PostgreSQL (port 5432)

## 🔧 Variables d'environnement

Voir `.env` pour les configurations:

- `DATABASE_URL` - Chaîne de connexion PostgreSQL
- Autres variables spécifiques à l'application
