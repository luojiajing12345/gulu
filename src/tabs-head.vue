<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'GuluTabsHeader',
        inject:['eventBus'],
        created(){
        }
    }

</script>

<style scoped lang="scss">
    $tab-height:40px;
    .tabs-head{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;

        border:solid red 1px;
        >  .actions-wrapper{
            margin-left: auto;
        }
    }
</style>