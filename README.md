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
getMedicos();
getPacientes();
getTurnos();
getConsultorio();
getMedico(id);
getPaciente(id);
getTurno(id);
getConsultorio(id);
getTurnos(Paciente);
getTurnos(Medico);
getTurno(Paciente,fecha);
getTurnos(fecha, Consultorio);

## POST
postMedicos();
postPacientes();
postTurnos();
postMedico(id,nombre, apellido, legajo, matricula, especialidad);
postPaciente(id,nombre, apellido, dni, obra_social);
postTurno(id,Paciente,Medico,Consultorio,fecha,confirmado);
postConsultorio(id,nombre,calle,altura,localidad);

## PUT
putMedico(id,nombre, apellido, legajo, matricula, especialidad);
putPaciente(id,nombre, apellido, dni, obra_social);
putTurno(id,Paciente,Medico,fecha,confirmado);
putConsultorio(id,nombre,calle,altura,localidad);

## DELETE
deleteMedicos();
deletePacientes();
deleteTurnos();
deleteConsultorios();
deleteConsultorio(id)
deleteMedico(legajo);
deletePaciente(dni);
deleteTurno(Paciente, fecha);
