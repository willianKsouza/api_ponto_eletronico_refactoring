import Handlebars from "handlebars";

interface IVariable {
    [key: string]: string | number
}

export class HandlebarsMailTemplate {
   static async parse({template, variables}: any) {
        const parseTemplate = Handlebars.compile(template)
        return parseTemplate(variables)
  }
}