import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function header() {
    return (
        <div className = 'Header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img
                className="header_logo"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAxNCA1MTIuMDE0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDE0IDUxMi4wMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRjU3MjI7IiBkPSJNMTAxLjk5OSw0NTguMTgxYy01Ni4zODQtNTcuMTUyLTQ5LjY5Ni0xNTAuODgsMTguMDQ4LTI1My42DQoJYzEyLjMyLTE4LjY4OCwyNS4wODgtMzUuNjQ4LDM5Ljc3Ni01Mi45NmwxMi4yMjQtMTQuMzY4bDEuMjE2LDEyLjgzMmMxLjg1NiwyMC4wOTYsNC41NzYsMzEuMTA0LDEwLjc1Miw0My42OA0KCWMzLjg3Miw3LjkwNCwxMC4yNCwxNi4zODQsMTMuMDI0LDE4Ljg0OGMyLjExMiwxLjg4OCwxLjEyLDIuOTc2LDExLjgwOC0yLjQ2NGM3MC4zNjgtMzguNCw3Ny42MzItMTAxLjA4OCw3My42NjQtMTU0Ljk3Ng0KCWMtMS4zNzYtMTUuODA4LTQuODY0LTMzLjQ0LTkuMTg0LTQ2LjRjLTEuNjY0LTQuOTkyLTIuNjI0LTguOTI4LTIuMTEyLTguNzY4YzAuNTEyLDAuMTYsOS4yOCw4LjQ0OCwxOS40ODgsMTguNDMyDQoJYzk3LjYsOTUuMjY0LDE1MC40LDE5NS4wMDgsMTU3LjI0OCwyOTcuMDg4YzIuMTQ0LDExNi45OTItNjQuNTQ0LDE3OS4zNi0xNjEuNiwxOTIuNjA4DQoJQzIwMy41MzUsNTIwLjkwMSwxNDYuMzE5LDUwMS42MzcsMTAxLjk5OSw0NTguMTgxTDEwMS45OTksNDU4LjE4MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                alt=""
            />
            <IconButton>   
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>

        </div>
    )
}

export default header
