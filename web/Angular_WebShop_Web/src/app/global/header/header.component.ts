import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    searchInput: String = ""
    displayMenu: Boolean = false

    onDisplayMenu() {
        this.displayMenu = !this.displayMenu
    }
    onSearch() {
        console.log(this.searchInput);
        
        throw new Error('Method not implemented.');
    }
}
