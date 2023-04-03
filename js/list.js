
const array = [
    { company: "Oratech", listValue: "Responsible for planning and facilitating user design sessions according to defined methodology." }
    , { company: "Oratech", listValue: " Responsible for documenting interaction (questions and responses) from a business owner" }
    , { company: "Oratech", listValue: " facilitate knowledge transfer by presenting results of all analysis and deliverables to project teams" }
    , { company: "Oratech", listValue: " Document decisions and the supporting reasons for the action made at each design meeting" }
    , { company: "Oratech", listValue: " Identify and communicate project and design risks to the project manager" }
    , { company: "Oratech", listValue: " Manage tasks according to prescribed project priorities and provide progress reports on projects" }
    , { company: "Oratech", listValue: " Responsible for producing ad-hoc SQL/Database queries" }
    , { company: "Oratech", listValue: " Provide regular progress reports and updates on tasks and job estimates to supervisor and project management as necessary" }
    , { company: "Oratech", listValue: " Responsible for troubleshooting software applications and document technical resolutions for research tickets" }
    , { company: "Oratech", listValue: " Handle tough technical problems and data issues" }
    , { company: "Oratech", listValue: " Provide support in the development of in-house applications and tools" }
    , { company: "Oratech", listValue: " Responsible for the creation or review of user documentation for assigned projects" }
    , { company: "Oratech", listValue: "Provide post-implementation support" },
    { company: "DataTech", listValue: "Hands on experience to build WordPress Websites" },
    { company: "DataTech", listValue: "Hands on experience to add functionality using core PHP" },
    { company: "DataTech", listValue: "Hands on experience in Laravel Development" },
    { company: "DataTech", listValue: "Hands on experience in creating databases (SQL)" },
    { company: "shaheenCos", listValue: "Work with development teams and product managers to ideate software solutions" },
    {company: "shaheenCos",listValue: "Design client-side and server-side architecture"},
    {company: "shaheenCos",listValue: "Build the front-end of applications through appealing visual design"},
    {company: "shaheenCos",listValue: "Develop and manage well-functioning databases and applications"},
    {company: "shaheenCos",listValue: "Write effective APIs"},
    {company: "shaheenCos",listValue: "Test software to ensure responsiveness and efficiency"},
    {company: "shaheenCos",listValue: "Troubleshoot, debug and upgrade software"},
    {company: "shaheenCos",listValue: "Create security and data protection settings"},
    {company: "shaheenCos",listValue: "Build features and applications with a mobile responsive design"},
    {company: "shaheenCos",listValue: "Write technical documentation"},
    { company: "shaheenCos", listValue: "Work with data scientists and analysts to improve software" },
    {company: "platinum",listValue: "Responsible for creating and maintaining in-house applications"},
    {company: "platinum",listValue: "Responsible to create dynamic/ static websites"},
    {company: "platinum",listValue: "Responsible to record the KPI’s of Overseas Tech Departments"},
    { company: "platinum",listValue: "Manage the tasks and assign tasks to the fellow workers on priority bases" },
    { company: "platinum", listValue: "Manage and issue the equipment’s according to the need and maintain the trace with in-house" },
    { company: "platinum", listValue: "Responsible for creation of the Asset Management System" },
];
let OraTech = "";
let DataTech = "";
let ShaheenCos = "";
let platinum = "";
for (let i = 0; i < array.length; i++) {
    if (array[i].company == "Oratech") {

        OraTech += "<li>" + array[i].listValue + "</li>";
    } else if(array[i].company == "DataTech"){
        DataTech += "<li>" + array[i].listValue + "</li>";
    } else if (array[i].company == "shaheenCos") {
        ShaheenCos += "<li>" + array[i].listValue + "</li>";
        
    } else if (array[i].company == "platinum") {
        platinum += "<li>" + array[i].listValue + "</li>";
        
    }
}

document.getElementById("OraTech").innerHTML = OraTech;
document.getElementById("DataTech").innerHTML = DataTech;
document.getElementById("shaheenCos").innerHTML = ShaheenCos;
document.getElementById("platinum").innerHTML = platinum;


