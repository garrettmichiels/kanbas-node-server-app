const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };  

const module = {
    id: 1,
    name: "NodeJS",
    description: "We will learn about NodeJS and ExpressJS in this module.",
    course: "Web Development",
}

function Lab5(app) {
    //Assignment -----------------------------------------------------------
    app.get("/a5/assignment", (req, res) => {
        res.json(assignment);
      });
    app.get("/a5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });

    app.get("/a5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });

    app.get("/a5/assignment/score/:newScore", (req, res) => {
        const { newScore } = req.params;
        assignment.score = newScore;
        res.json(assignment);
    });

    app.get("/a5/assignment/completed/:newCompleted", (req, res) => {
        const { newCompleted } = req.params;
        assignment.completed = newCompleted;
        res.json(assignment);
    });

    //Module ---------------------------------------------------------------
    app.get("/a5/module", (req, res) => {
        res.json(module);
    });
    app.get("/a5/module/name", (req, res) => {
        res.json(module.name);
    });  
    app.get("/a5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
    });    

    app.get("/a5/module/description/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        module.description = newDescription;
        res.json(module);
    });    



    app.get("/a5/calculator", (req, res) => {
        const { a, b, operation } = req.query;
        let result = 0;
        switch (operation) {
            case "add":
                result = parseInt(a) + parseInt(b);
                break;
            case "subtract":
                result = parseInt(a) - parseInt(b);
                break;
            case "multiply":
                result = parseInt(a) * parseInt(b);
                break;
            case "divide":
                result = parseInt(a) / parseInt(b);
                break;
          default:
            result = "Invalid operation";
        }
        res.send(result.toString());
      });

    app.get("/a5/calculator2", (req, res, next) => {
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);
        const operation = req.query.operation;
        switch (operation) {
            case "add":
                res.send(`${num1} + ${num2} = ${num1 + num2}`);
                break;
            case "subtract":
                res.send(`${num1} - ${num2} = ${num1 - num2}`);
                break;
            case "multiply":
                res.send(`${num1} * ${num2} = ${num1 * num2}`);
                break;
            case "divide":
                res.send(`${num1} / ${num2} = ${num1 / num2}`);
                break;
            default:
                res.send("Invalid operation");
        }
    });
    app.get("/a5/add/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString());
      });
      app.get("/a5/subtract/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) - parseInt(b);
        res.send(sum.toString());
      });
    
    // app.get("/a5/add/:num1/:num2", (req, res, next) => {
    //     const num1 = parseInt(req.params.num1);
    //     const num2 = parseInt(req.params.num2);
    //     const sum = num1 + num2;
    //     res.send(`${num1} + ${num2} = ${sum}`);
    // });
    app.get("/a5/welcome", (req, res, next) => res.send("Welcome to Assignment 5"));
      
}
export default Lab5;