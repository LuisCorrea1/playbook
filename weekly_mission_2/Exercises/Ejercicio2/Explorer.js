const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   // 1)Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
   console.log(" \n 1) Nombre de cada Explorer con foreach")
   explorers.forEach((element) => console.log(element.name))

   // 2)Imprime el stack de cada explorer, usa FOR EACH
   console.log(" \n 2) Stack de cada explorer con foreach")
   explorers.forEach((element) => console.log(element.stack))

   // 3)Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
   console.log("\n 3) Crear lista de stacks con MAP")
   const newList = explorers.map((item) => item.stack)
   console.log(newList)

   // 4)Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
   console.log("\n 4) Obtener una lista usando Filter (buscar explores con stack 'js')")
   const findStackJS = explorers.filter((stack) => stack.stack == 'js')
   console.log(findStackJS)

   // 5)Buscar el primer explorer que sea de la CDMX (usar FIND)
   console.log("\n 5) Buscar con FIND el primer explorer que se de la CDMX")
   const location = explorers.find((city) => city.city == "CDMX")
   const expName = location.name
   console.log(expName)

   // 6)Obtener la suma de todos los exercises_completed usando REDUCE
   console.log("\n 6) Obtener la suma de exercises_completed usando REDUCE")
   const suma_exercises = explorers.reduce((acc, exercises) => acc + exercises.exercises_completed, 0)
   console.log(suma_exercises)

   // 7) Validar si algún explorer tiene porpiedad exercisesFinished en frontend como true (SOME)
   console.log(" \n 7) Obtener la validación si al meno uno de los explorers tiene exercisesFinished como true")
   const exercises = explorers.some((finished) => finished.missions.frontend.exercisesFinished === true)
   console.log(exercises)

   // 8)Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
   console.log("\n 6)Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true  ")
   const exercisesOnBoard = explorers.every((finished) => typeof finished.missions.onboarding.isFinished === true)
   console.log(exercisesOnBoard)
