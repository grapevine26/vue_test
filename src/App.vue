<template>
    <v-app>
        <v-app-bar app color="none" flat style="background: none" elevate-on-scroll
                   scroll-target="#scrolling-techniques" :class="{change_color: scrollPosition > 50}">
            <div class="d-flex align-center">
                <v-toolbar-title>
                    <router-link to="/" style="text-decoration: none; color: inherit">Leo & Heidi Blog</router-link>
                </v-toolbar-title>
            </div>

            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn to="/whoarewe" text>
                    <span class="mr-2">Who Are We</span>
                </v-btn>
                <v-btn to="/memories" text>
                    <span class="mr-2">Memories</span>
                </v-btn>
                <v-btn to="/footprints" text>
                    <span class="mr-2">Footprints</span>
                </v-btn>
                <v-btn to="/tips" text>
                    <span class="mr-2">Tips</span>
                </v-btn>
                <v-btn to="/contact" text>
                    <span class="mr-2">Contact</span>
                </v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-btn to="/login" text>
                <span class="mr-2">Login</span>
            </v-btn>
        </v-app-bar>
        <v-main id="scrolling-techniques"
                class="overflow-y-auto"
                max-height="700">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
<style>
    .change_color {
        background-color:red
    }
</style>
<script>

    export default {
        name: "App",


        data: () => ({
            scrollPosition: null
        }),
        methods: {
            updateScroll() {
                this.scrollPosition = window.scrollY
            }
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
        }
    };
</script>
