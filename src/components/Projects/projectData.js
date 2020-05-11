export default [
    {
        name: 'Schematic Capture',
        stack: ['React', 'Redux', 'Express','Knex', 'Node.Js', 'PostgreSQL', 'Firebase', 'Docker', 'Figma'],
        APIs: ['SendGrid'],
        links: [
            {
                name: 'Backend',
                location: 'https://github.com/Lambda-School-Labs/schematic-capture-be'
            },
            {
                name: 'Frontend',
                location: 'https://github.com/Lambda-School-Labs/schematic-capture-fe'
            }
        ],
        title: 'Full Stack Developer',
        role: 'Created the REST API for communicating with Postgres and Firebase (moved to AWS). Also worked with front end team on application state management in the web app.',
        description: 'An iOS/web app for capturing and annotating photos of manufacturing machinery. It needs offline capabilities to be able work in facilities with limited connectivity.',
    },
    {
        name: 'DevDesk Queue',
        stack: ['Express','Knex', 'Node.Js', 'PostgreSQL'],
        APIs: [],
        links: [
            {
                name: 'Backend',
                location: 'https://github.com/Build-Week-DevDesk-Queue-1/Backend'
            }
        ],
        title: 'Backend Developer',
        role: 'Developed and hosted a REST API for CRUD operations to the Postgres database.',
        description: 'A help desk ticketing system for instructors and students to provide and receive help on specific track related issues.',
    }
];