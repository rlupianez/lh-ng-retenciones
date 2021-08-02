# Holando Net

## Proyecto: lh_ng_retenciones - Retenciones

### Descripción: Contiene la app angular de retenciones 

### web: /<app>/reportes/lh_ng_retenciones/#/list
### local: localhost:4200/#/list
### Ubicacion de la distribucion en web server: /oracle/ntapp/hnet3.0/reportes/lh-ng-retenciones

---

## Versión: 2

```text
Fecha, Version, Programador, Tarea
----------------------------------------------------
26/07/2021, v1, rlupianez, #44467 - version heredada de habito
30/7/2021, v2, rlupianez,  #44467 - Mal funcionamiento en filtro desde y hasta. Se modificaron los parametros max y min del control de periodo.
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
git add README.mdgit add
git commit -m "first commit"
git branch -M main

git remote rm origin
git remote add origin `https://github.com/<usuario>/<nombre_del_modulo>.git`

git push -u origin main
```
