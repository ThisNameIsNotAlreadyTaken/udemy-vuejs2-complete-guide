<template>
    <div class="menu-item-tile col-md-6">
        <div class="row">
            <div class="col-sm-5">
                <div class="menu-item-photo">
                    <div>{{item.short_name}}</div>
                    <img class="img-responsive" width="250" height="150" :src="imageUrl" :alt="item.name">
                </div>
                <div class="menu-item-price">{{item.price_small | currency}}<span> {{item.small_portion_name}}</span> {{item.price_large | currency}} <span>{{item.large_portion_name}}</span></div>
            </div>
            <div class="menu-item-description col-sm-7">
                <h3 class="menu-item-title">{{item.name}}</h3>
                <p class="menu-item-details">{{item.description}}</p>
            </div>
        </div>
        <hr class="visible-xs">
    </div>
</template>

<script>
    export default {
        props: ['item'],
        computed: {
            imageUrl() {
                const imageBasePath = "https://trinat-coursera-angularjs.herokuapp.com/images/";

                return `${imageBasePath}${this.item.short_name}.jpg`;
            }
        },
        filters: {
            currency(val) {
                return `UDS${val}`;
            }
        }
    }
</script>

<style scoped>
    .menu-item-tile {
    margin-bottom: 25px;
    }
    .menu-item-tile hr {
    width: 80%;
    }
    .menu-item-tile .menu-item-price {
    font-size: 1.1em;
    text-align: right;
    margin-top: -15px;
    margin-right: -15px;
    }
    .menu-item-tile .menu-item-price span {
    font-size: .6em;
    }
    .menu-item-photo {
    position: relative;
    border: 2px solid #3F0C1F;
    overflow: hidden;
    padding: 0;
    margin-right: -15px;
    margin-left: auto;
    margin-bottom: 20px;
    max-width: 250px;
    }
    .menu-item-photo div {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80px;
    background-color: #557c3e;
    text-align: center;
    }
    .menu-item-description {
    padding-right: 30px;
    }
    h3.menu-item-title {
    margin: 0 0 10px;
    }
    .menu-item-details {
    font-size: .9em;
    font-style: italic;
    }
</style>