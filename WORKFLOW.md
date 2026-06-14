# Workflow

GitHub er single source of truth. To branches:

| Branch | Ejer | Formål |
|---|---|---|
| `main` | Claude Code | Altid den nyeste, færdige version |
| `figma` | Figma Make | Al Figma-genereret kode lander her |

## Sådan arbejder du

### Fra Figma Make → GitHub
1. I Figma Make: vælg dette repo og branch **`figma`**
2. Generer kode og push
3. Gå til GitHub → opret PR: `figma` → `main` → merge

### Fra Claude Code → GitHub
1. `git pull origin main` (altid start her)
2. Rediger filer
3. `git add . && git commit -m "beskrivelse"`
4. `git push origin main`

### Figma henter Claudes ændringer
Næste gang Figma Make åbner repo'et, sæt branch til **`main`** — så ser den alle ændringer.

## Projektoverblik

| Projekt | Repo | Branch-strategi |
|---|---|---|
| Demo StepCare præsentation | jki-debug/DemoStepCarePraesentation | main + figma |
| AIOH StepCare Platform | neerajkaushik123/Aiohstepcareplatform | main + figma |
| AIOH StepCare Produktside | neerajkaushik123/Aiohstepcareproduktside | main + figma |
| FysioDanmark website | jki-debug/fysiodanmark-broendby | main + figma |
