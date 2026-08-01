import {defineField, defineType} from 'sanity'
export const projectType = defineType({
    name:'project',
    title: 'Project',
    type: "document",
    fields:[
        defineField({
            name:'header',
            type:'string',
            validation: (rule)=>rule.required()
        }),
        defineField({
            name:"description",
            type: "array",
            of:[{type:"block"}]
        }),
        defineField({
            name :"industry",
            type: "string",
        
        }),
        defineField({
            name:'duration',
            type:'string'
        }),
        defineField({
            name:"role",
            type:"string"
        }),
        defineField({
            name:"techs",
            type:"string",

        }),
        defineField({
            name:'image',
            type:"image",

        }),
        defineField({
            name:"overview",
            type:"array",
            of: [{type: "block"}]
        }),
        defineField({
            name:"problem",
            type:"array",
            of: [{type: 'string'}]
        }),
        defineField({
            name:"goal",
            type:"array",
            of: [{type: "string"}]
        }),
        defineField({
            name:"discover",
            type  : "array",
            of: [{type: "block"}]
        }),
        defineField({
            name:"visual",
            type:"array",
            of: [{type: 'string'}]
        }),
        defineField({
            name: "mobile",
            type:"array",
            of: [{type: 'string'}]
        }),
        defineField({
            name:"conversion",
            type:"array",
            of: [{type: 'string'}]

        }),
        defineField({
            name:"technologies",
            type:"array",
            of: [{type: 'string'}]
        }),
        defineField({
            name:"features",
            type:"array",
            of: [{type: "string"}]
        }),
        defineField({
            name:"keychallenge",
            type:"array",
            of: [{type:"block"}]
        }),
        defineField({
            name:"techStack",
            type:"array",
            of: [{type:"string"}]
        }),

        defineField({
            name:"conclusion",
            type:"array",
            of: [{type: "block"}]
        })

    ],
    

})