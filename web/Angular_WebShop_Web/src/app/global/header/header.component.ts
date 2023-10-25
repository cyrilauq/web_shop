import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input()
    appTitle: String = ""

    searchInput: String = ""
    displayMenu: boolean = false
    iconPath: String = "assets/menu_icon.svg"

    onDisplayMenu() {
        this.displayMenu = !this.displayMenu
        this.iconPath = "assets/" + (this.displayMenu ? "close_icon" : "menu_icon" ) + ".svg"
    }

    onSearchClicked() {
        console.log(this.searchInput);
        
        throw new Error('Method not implemented.');
    }

    onSearch() {
        console.log(this.searchInput);
        
        throw new Error('Method not implemented.');
    }
}
