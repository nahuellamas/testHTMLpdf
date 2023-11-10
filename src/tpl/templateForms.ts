export function templateForms(variableForm: any){
    const content = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>PDF Result Template</title>
        <style>
          h1 {
            color: green;
            text-decoration: underline;
          }
          p {
            color: red;
            font-size: x-large;
          }
        </style>
      </head>
      <body>
          <h1>Hola</h1>
          <p>${variableForm}</p>
      </body>
    </html>
    `;
    return content
}
