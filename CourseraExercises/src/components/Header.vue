<template>
    <nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
        <a class="navbar-brand" href="#">Coursera Assignments</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <router-link to="/assignment1" tag="li" active-class="active"><a>Assignment 1</a></router-link>
            <router-link to="/assignment2" tag="li" active-class="active"><a>Assignment 2</a></router-link>
            <router-link to="/assignment3" tag="li" active-class="active"><a>Assignment 3</a></router-link>
            <router-link to="/assignment4" tag="li" active-class="active"><a>Assignment 4</a></router-link>
            <router-link to="/assignment5" tag="li" active-class="active"><a>Assignment 5</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <router-link to="/" tag="li" exact><a>Back</a></router-link>
        </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
    </nav>
</template>
