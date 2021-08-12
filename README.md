# Holando Net

## Proyecto: lh-ng-retenciones - Retenciones

### Descripción: Contiene la app angular de retenciones

### web: /app/reportes/lh-ng-retenciones/#/list

### local: localhost:4200/#/list

### Ubicacion de la distribucion en web server: /oracle/ntapp/hnet3.0/reportes/lh-ng-retenciones

---

## Versión: 5

```text
Fecha, Version, Programador, Tarea
----------------------------------------------------
26/07/2021, v1, rlupianez, #44467 - version heredada de habito
30/07/2021, v2, rlupianez,  #44467 - Mal funcionamiento en filtro desde y hasta. Se modificaron los parametros max y min del control de periodo.
04/08/2021, v3, rlupianez, #45658 - Quitar organizador de poliza-en-cartera-list.config.ts
11/08/2021, v4, rlupianez,        - Comentar linea de organizador para que no aparezca en la popup de columnas visibles.
12/08/2021, v5, rlupianez,        - Commit en Git 
```

---

## Checklist

```text
Establecer en angular.json el campo "baseHref":"/app/<ruta>/<modulo>/"

Quitar los modulos que no se utilizan en este proyecto como ser /home /transporte etc.

Modificar enviroment.ts campo apiUrl: 
'/rws' para generar la distribución
'/api' para ejectuar localmente
production: false si se ejecuta localmente o true si se genera la distribución
```

---

## Notas

```text
Resta todavía depurar el proyecto.
```

---

## Utilidades

```text
Reconstruir proyectos:
npm install

Ejecutar localmente:
npm run proxy
o
ng serve --host=0.0.0.0 --proxy-config=proxy.conf.json

Generar distribución:
    - Verificar el archivo environment.ts y cambiar apiURL de /api a rws
    - Comentar la creación de cookie utilzada en desarrollo en el archivo app.component.ts
    - Luego ejecutar
        npm run ng build --prod --optimization=true
        o
        ng build --prod --optimization=true


Varios GitHub:
git init
git remote rm origin
git remote add origin "https://github.com/rlupianez/lh-ng-retenciones.git"
git add --all
git commit -m "Version 2"
git branch -M main
git push -u origin main

```
