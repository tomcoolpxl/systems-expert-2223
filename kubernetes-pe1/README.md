# Kubernetes PE - PSCFSA (PXL Super-Complicated Full-Stack App)

## Beschrijving

PSCFSA is een fullstack web app die met een frontend woorden in een database kan steken of verwijderen.

![screenshot](screenshot.png)

De volgende technologieën worden gebruikt:

- React frontend
- Python/Flask backend
- Postgres database

## Opdracht

- Zorg ervoor dat deze web app in Kubernetes kan draaien.
- Gebruik een k3d cluster en zorg ervoor dat de app beschikbaar is in je browser op http://localhost:9090.

### Evaluatie

#### Minimum requirements om te slagen

- De app werkt in Kubernetes.
- Je kan woorden toevoegen en verwijderen.
- De app is beschikbaar in je browser via http://localhost:9090.
- De yaml files zijn beschikbaar in de oplossing directory.
- De k3d cluster startup file(s) is beschikbaar in de oplossing directory.
- Verander geen source files, met optionele uitzondering van de frontend Dockerfile (zie Extra's).

### Extra 1

- De database username is 'username'.
- Het database password is 'password123'.

### Extra 2

- Het database password is een Kubernetes Secret.

### Extra 3

- Alle gebruikte environment variables komen uit Kubernetes ConfigMaps.

### Extra 4

- De frontend Dockerfile gebruikt een build stage om een efficiënter container image te bekomen.
