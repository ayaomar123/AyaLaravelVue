<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="/">
                    Laravel
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link active-class="active-menu"
                                         exact :to="{ name: 'posts.index' }"
                                         class="nav-link">Posts list</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link active-class="active-menu"
                                         exact :to="{ name: 'posts.create' }"
                                         class="nav-link">Add new post</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            <div class="container">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>





<!--<template>-->
<!--    <div class="container">-->
<!--        <nav class="navbar navbar-expand-lg navbar-light bg-light">-->
<!--            <div class="collapse navbar-collapse">-->
<!--                <div class="navbar-nav">-->
<!--                    <router-link to="/" class="nav-item nav-link">Products List</router-link>-->
<!--                    <router-link to="/create" class="nav-item nav-link">Create Product</router-link>-->
<!--                </div>-->
<!--            </div>-->
<!--        </nav>-->

<!--        <router-view> </router-view>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {}-->
<!--</script>-->
