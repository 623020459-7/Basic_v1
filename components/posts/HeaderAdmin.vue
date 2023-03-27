<template>
    <div>
        <b-navbar toggleable="lg" type="" variant="" class="header-color">
            <b-navbar-brand>
                <img src="../../assets/image/686.jpg" alt="" class="header-logo">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/admin/index1">Logout</b-nav-item>
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

