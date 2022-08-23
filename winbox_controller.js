let box_color =   "#87118b";
let html_1 = "<div id='winbox_bounding'> <h1 id='winbox_text'>Active Desktop Wallpapers</h1 id='winbox_text'><p  id='winbox_text'>Active Desktop Wallpaper created with the GDScript Javascript interface and Lively WallPapers.</p> <a href='https://rustyraygun.github.io/active_wallpapers/wallpaper_001/'><h4 id='winbox_linktext'>Project Page</h4></a> <img src='./images/homepage/lively_UI.gif'></></div>"
let html_2 = "<div id='winbox_bounding'> <h1 id='winbox_text'> IAKU Get Weather </h1 ><p id='winbox_text'>A Simple Weather App Prototype made With GDScript, and Rest-API.</p> <a href='https://lenardblair.github.io/get_weather/'><h4 id='winbox_linktext'>Open App</h4></a> <img src='./images/homepage/get_weather.png'></></div>"
let html_3 = "<div id='winbox_bounding'> <h1 id='winbox_text'>Sebo Bounce v.1</h1> <a href='https://gotm.io/rustyraygun/sebo'><h3 id='winbox_linktext'>PLAY</h3></a> <img src='./images/homepage/sebo.jpg'></></div>"

function show_project(project_num) {
    if (project_num == 1) {
        new WinBox({
            id: "winbox",
            class: "_winbox",
            title: "[Web-Native App] Active Desktop Wallpapers",
            html: html_1,
            background: box_color,
            height: "100%",
            
        });
    }

    else if (project_num == 2) {
        new WinBox({
            id: "winbox",
            class: "_winbox",
            title: "[Software] Get Weather v0.1",
            html: html_2,
            background: box_color,
            height: "100%",
        });
    }

    else if (project_num == 3) {
        new WinBox({
            id: "winbox",
            class: "_winbox",
            title: "[Game] Sebo Bounce v.1",
            html: html_3,
            background: box_color,
            height: "100%",
        });
    }
}
