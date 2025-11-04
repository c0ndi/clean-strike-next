# Clean Strike - Poradnik Deploymentu na Vercel

## Wymagania

- Konto na [Vercel](https://vercel.com) (darmowe)
- Repozytorium tego projektu na GitHub/GitLab/Bitbucket

## Krok po kroku

### 1. Przygotuj repozytorium

Upewnij się, że kod jest w repozytorium Git:

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Zaloguj się do Vercel

Wejdź na [vercel.com](https://vercel.com) i zaloguj się swoim kontem GitHub/GitLab/Bitbucket.

### 3. Import projektu

1. Kliknij **"Add New..."** → **"Project"**
2. Wybierz repozytorium `clean-strike-next`
3. Vercel automatycznie wykryje Next.js

### 4. Konfiguracja (opcjonalnie)

Możesz zostawić domyślne ustawienia:

- **Framework Preset**: Next.js
- **Root Directory**: ./
- **Build Command**: `pnpm run build` (lub `npm run build`)
- **Output Directory**: `.next`

### 5. Deploy

Kliknij **"Deploy"** i poczekaj kilka minut. Vercel automatycznie:

- Zainstaluje zależności
- Zbuduje aplikację
- Wdroży ją na domenie

### 6. Gotowe! 🎉

Po zakończeniu otrzymasz link do swojej strony, np:
`https://clean-strike-next.vercel.app`

## Aktualizacje

Każdy push do branch `main` automatycznie wdroży nową wersję strony.

## Domena własna (opcjonalnie)

1. W Vercel → **Settings** → **Domains**
2. Dodaj swoją domenę
3. Skonfiguruj DNS zgodnie z instrukcjami Vercel
