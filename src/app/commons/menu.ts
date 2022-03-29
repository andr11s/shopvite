const d = document;

function MenuResponsive(e: MouseEvent) {
    const target = e.target as HTMLTextAreaElement;
    const $menu_1 = d.getElementById('icon_active'), $menu_2 = d.getElementById('icon_inactive');
    const $nav__menu = d.getElementById('nav__menu');

    if (target.matches(".icons_view")) {

        if (target.id == 'icon_active') {

            target.classList.toggle('menu__active');

            $menu_2?.classList.remove('menu__active');


            $nav__menu?.classList.remove('menu__in--view');
            $nav__menu?.classList.add('menu__out--view');
        }

        if (target.id == 'icon_inactive') {


            target?.classList.add('menu__active');
            $menu_1?.classList.remove('menu__active');

            $nav__menu?.classList.remove('menu__out--view');
            $nav__menu?.classList.add('menu__in--view');

        }
    }
}

export default MenuResponsive;