<template>
    <div>
        <mt-table :config="columns" :data="list"></mt-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                {
                    type: 'selection'
                },
                {
                    label: "ID",
                    prop: "id"
                },
                {
                    label: "Name",
                    prop: "name"
                },
            ],
            list: [
                {
                    id: 1,
                    name: '测试测试'
                },
                {
                    id: 2,
                    name: '测试测试'
                }
            ]
        };
    }
};
</script>

<style>
</style>