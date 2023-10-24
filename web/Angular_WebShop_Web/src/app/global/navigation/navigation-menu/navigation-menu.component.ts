import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {
    menu = [
        {
            title: "Books",
            sous_cat: [
                "manga",
                "romance",
                "thriller"
            ]
        },
        {
            title: "Divertissement",
            sous_cat: [
                "video games",
                "playstations"
            ]
        },
        {
            title: "garden",
            sous_cat: [
                "tools",
                "decorations",
                "games"
            ]
        }
    ]
}
