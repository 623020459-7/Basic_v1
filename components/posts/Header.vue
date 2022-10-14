<template>
    <div>
        <b-navbar toggleable="lg" type="" variant="" class="header-color">
            <b-navbar-brand href="#">
                <img src="../../assets/image/686.jpg" alt="" class="header-logo">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <div class="button-nav-form">
                            <b-button size="sm" class="my-2 my-sm-0 text-home" type="submit">Home</b-button>
                        </div>
                        <div class="button-nav-form">
                            <b-button size="sm" class="my-2 my-sm-0 text-home" type="submit">360 ํ virtual tour
                            </b-button>
                        </div>
                        <div class="">
                            <b-nav-item-dropdown text="Gallery" right>
                                <b-dropdown-item href="#">EN</b-dropdown-item>
                                <b-dropdown-item href="#">ES</b-dropdown-item>
                                <b-dropdown-item href="#">RU</b-dropdown-item>
                                <b-dropdown-item href="#">FA</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </div>
                    </b-nav-form>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {

}
</script>

<style>
:root {
    --color-kku: rgb(119, 43, 20);
}

.header-color {
    background: rgb(255, 255, 255);
}

.header-logo {
    width: 20vw;
}

a,
.text-home {
    color: var(--color-kku);
    font-weight: 500;
    font-size: 18px;
}

.text-home {
    background: none;
    border: none;
}
.button-nav-form{
    padding: 0 1rem;
}
a:hover ,
.btn-secondary:hover {
    color: #fff;
    background-color: var(--color-kku);
    border-color: var(--color-kku);
}
.btn-sm, .btn-group-sm > .btn {
    border-radius: 0;
}
.nav-link{
    padding: 0.25rem 1rem;
}
.dropdown-item:hover, .dropdown-item:focus {
    color: #fff;
    background-color: var(--color-kku);
}
.navbar-brand:hover{
    background: none;
}
</style>