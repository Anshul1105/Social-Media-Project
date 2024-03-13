import React from 'react';

const Sidebar = ({ selectedTab,setSelectedTab }) => {

    const handleOnClick = (tabName) => {
        setSelectedTab(tabName);
    }

    return <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "280px" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
            <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item" onClick={()=>{handleOnClick("Home")}}>
                <a href="#" className={`nav-link text-white ${selectedTab==='Home' && 'active'}`} aria-current="page">
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                    Home
                </a>
            </li>
            <li onClick={()=>{handleOnClick("Create Post")}}>
                <a href="#" className={`nav-link text-white ${selectedTab==='Create Post' && 'active'}`}>
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                    Create Post
                </a>
            </li>
            <li onClick={()=>{handleOnClick("My Followers")}}>
                <a href="#" className={`nav-link text-white ${selectedTab==='My Followers' && 'active'}`}>
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                    My Followers
                </a>
            </li>
            <li onClick={()=>{handleOnClick("Following")}}>
                <a href="#" className={`nav-link text-white ${selectedTab==='Following' && 'active'}`}>
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                    Following
                </a>
            </li>
            <li onClick={()=>{handleOnClick("My Account")}}>
                <a href="#" className={`nav-link text-white ${selectedTab==='My Account' && 'active'}`}>
                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
                    My Account
                </a>
            </li>
        </ul>
        <hr />
        <div className="dropdown">
            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://images.unsplash.com/photo-1705301766257-c0f31029fcc5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTl8fHxlbnwwfHx8fHw%3D" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>Strider</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>
    </div>

};
export default Sidebar;