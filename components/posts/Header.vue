<template>
    <div>
        <b-navbar toggleable="lg" type="" variant="" class="header-color">
            <b-navbar-brand>
                <img src="../../assets/image/686.jpg" alt="" class="header-logo">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/">Home</b-nav-item>
                    <div class="">
                        <b-nav-item-dropdown text="360 virtual tour" right>
                            <b-dropdown-item href="/T copy.html">1st floor</b-dropdown-item>
                            <b-dropdown-item href="/T copy.html">2st floor</b-dropdown-item>
                            <b-dropdown-item href="/T copy 3.html">3st floor</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </div>
                    <!-- <b-nav-item href="/Virtual.html">360 virtual tour</b-nav-item> -->
                    <!-- <b-nav-form>
                        <div class="button-nav-form">
                            <nuxt-link to="/" size="sm" class="my-2 my-sm-0 text-home" type="submit">Home</nuxt-link>
                        </div>
                        <div class="button-nav-form">
                            <router-link to="/Virtual.html" size="sm" class="my-2 my-sm-0 text-home" type="submit">
                                360 ํ
                                virtual tour
                            </router-link>
                        </div> -->
                    <div class="">
                        <b-nav-item-dropdown text="Performance" right>
                            <b-dropdown-item href="/performance/index2">Painting</b-dropdown-item>
                            <b-dropdown-item href="#">Sculpture</b-dropdown-item>
                            <b-dropdown-item href="#">Statue</b-dropdown-item>
                            <b-dropdown-item href="#">Carving</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </div>
                    <div class="">
                        <b-nav-item-dropdown text="Login" right>
                            <b-dropdown-item href="/admin/index3">Login</b-dropdown-item>
                            <b-dropdown-item href="#">Logout</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </div>
                    <!-- </b-nav-form> -->

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

/* a.nuxt-link-active {
  font-weight: bold;
} */
/* a.nuxt-link-exact-active {
  color: #00c58e;
} */

a,
.text-home {
    color: var(--color-kku);
    font-weight: 500;
    font-size: 18px;
}

.text-home {
    background: none;
    border: none;
    padding: 0.25rem 1rem;
}

.button-nav-form {
    padding: 0 0.5rem;
}

.dropdown {
    padding: 0 0.5rem;
}

a:hover,
.btn-secondary:hover,
a.nuxt-link-exact-active {
    color: #fff;
    background-color: var(--color-kku);
    border-color: var(--color-kku);
    text-decoration: none;
    padding: 0.25rem 1rem;
    border-radius: 1.5rem;
}

.btn-sm,
.btn-group-sm>.btn {
    border-radius: 1.5rem;
}

.nav-link {
    padding: 0.25rem 1rem;
}

.dropdown-item:hover,
.dropdown-item:focus {
    color: #fff;
    background-color: var(--color-kku);
    border-radius: 1.5rem;
}

.navbar-brand:hover {
    background: none;
}
</style>

