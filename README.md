# TP Arquitectura Web
Trabajo practico Arquitectura Web

# Tematica API de Humor
La API va a poder proveer chistes segun la preferencia del usuario (categoria, idioma, cantidad de chistes, etc)

# Modelo (ejemplo)
## Chiste 
  {
    "id": 1,
    "categoria": "atp",
    "tipo": "dospartes",
    "inicio": "Mama mama, en el colegio me dicen alfajor",
    "remate": "no te preocupes jorjito",
    "flags":{
        "nsfw": false,
        "racismo": false,
        "politica": false,
        "religion": false
     }
     "safe": true;
  }

# Servicios

## GET
getChistes();\
getChiste(id);\
getChistes(cantidad, categoria, tipo, flags);

## POST
postChiste(categoria, tipo, inicio, remate, flags, safe);

## PUT
putChiste(id, categoria, tipo, inicio, remate, flags, safe);

## DELETE
deleteChiste(id);
