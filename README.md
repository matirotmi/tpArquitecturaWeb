# TP Arquitectura Web
Trabajo practico Arquitectura Web

# Tematica Turnera medica

# Modelo (ejemplo)
## Medico 
  {\
    "id": 1,\
    "nombre": "Rene",\
    "apellido": "Favaloro",\
    "legajo": "1234",\
    "matricula": "0001",\
    "especialidad":"cardiologia"\
  }
## Paciente 
  {\
    "id": 1,\
    "nombre": "Matias",\
    "apellido": "Rotmistrovsky",\
    "dni": "44332211",\
    "obra_social": "OSDE",\
    "activo":true,\
  }
## Turno 
  {\
    "id": 1,\
    "paciente": Paciente,\
    "medico": Medico,\
    "consultorio":Consultorio\
    "fecha": "10/04/2023",\
    "hora": "10:00",\
    "confirmado":true,\
  }

## Consultorio

  {\
    "id": 1,\
    "nombre":,\
    "calle": "Federico Lacroze",\
    "altura": "1548",\
    "localidad": "belgrano",\
  }

# Servicios

## GET
GET /medicos \
GET /pacientes \
GET /turnos \
GET /consultorios \
GET /pacientes/{id} \
GET /medicos/{id} \
GET /turnos/{id} \
GET /consultorios/{id} \
GET /pacientes/{id}/turnos \
GET /medicos/{id}/turnos \
GET /pacientes/{id}/turnos?fecha={fecha} \
GET /medicos/{id}/turnos?fecha={fecha} \

## POST
POST /medicos\
POST /pacientes\
POST /turnos\
POST /consultorio\

## PUT
PUT /medicos/{id}\
PUT /pacientes/{id}\
PUT /turnos/{id}\
PUT /consultorios/{id}\

## DELETE
DELETE /medicos/{id}\
DELETE /pacientes/{id}\
DELETE /turnos/{id}\
DELETE /consultorios/{id}
