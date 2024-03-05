//classe que vai conter a logica dos dados
//como os dados serão estruturados

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }
}

//classe que vai criar a vizulização e eventos HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
    }

    update() {
        this.removeAllTr()

    }

    createRow() {

        const tr = document.createElement('tr')

        const content =

            `
        <td class="user">

            <img src="https://github.com/shaienne23.png" alt="Imagem de Shaienne">

            <a href="https://github.com/shaienne23" target="_blank">
                <p>Shaienne Oliveira</p>
                <span>shaienne23</span>
            </a>

        </td>

        <td class="repositories">76</td>

        <td class="followers">9589</td>

        <td>

            <button class="remove">&times;</button>

        </td>

`
    }



    removeAllTr() {
        const tbody = this.root.querySelector('table tbody')

        tbody.querySelectorAll('tr')

            .forEach((tr) => {
                tr.remove()
            })

    }

}