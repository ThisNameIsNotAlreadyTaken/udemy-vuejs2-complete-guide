<template>
    <nav class="navbar navbar-inverse">
        <div class="container">
            <div class="navbar-header">
                <span class="navbar-brand">Module 5 solution</span>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link :to="{ name: 'start' }" tag="li" active-class="active"><a>Home</a></router-link>
                    <router-link :to="{ name: 'myinfo' }" tag="li" active-class="active"><a>My Info</a></router-link>
                    <router-link :to="{ name: 'signup' }" tag="li" active-class="active"><a>Sign Up</a></router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .nav-sidebar > .active > a, .nav-sidebar > .active > a:hover, .nav-sidebar > .active > a:focus {
        color: #fff;
        background-color: #428bca;
    }   

    .navbar-brand {
        color: #9d9d9d !important;
    }

    .navbar {
        margin-bottom: 0;
    }
</style>