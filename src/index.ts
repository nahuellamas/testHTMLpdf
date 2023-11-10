import pdf, { CreateOptions } from "html-pdf";
import fs from 'fs';
import { templateForms } from "./tpl/templateForms";

 const options: CreateOptions = {
     "format": "Tabloid",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
     "orientation": "portrait", // portrait or landscape
 }

const variable = "hola desde variable"

const template = templateForms(variable)

console.log(template)

pdf.create(template, options).toFile('./pdf/3-html-pdf.pdf', function(err, res) {
    if (err){
        console.log(err);
    } else {
        console.log(res);
    }
});

// var html = fs.readFileSync('./tpl/template.html', 'utf8');



// pdf.create(html, options).toFile("./pdf/7-html-pdf.pdf", function (err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });
