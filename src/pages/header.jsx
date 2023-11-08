import "./style.css";

export default function Header(){
    return(
        <nav>
    <div id="menu">
      <a href="index.html"><ion-icon name="bar-chart" class="current-icon"></ion-icon></a>
      <a href="favorites.html"><ion-icon name="heart"></ion-icon></a>
      <a href="settings.html"><ion-icon name="settings"></ion-icon></a>
      <a href="about.html"><ion-icon name="help-circle"></ion-icon></a>      
    </div>
  </nav>
    );
}