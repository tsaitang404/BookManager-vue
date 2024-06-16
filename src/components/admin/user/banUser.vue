<template>
    <div>
        <select-user v-model:user="selectedUser" />
        <button @click="confirmDelete">删除用户</button>
        <Dialog v-model:dialogVisible="dialogVisible" @confirm="deleteUser" @cancel="closeDialog" />
    </div>
</template>

<script>
import SelectUser from "@/components/UI/userSelector.vue";
import dialog from "@/components/UI/dialog.vue";

export default {
    components: {
        SelectUser,
        dialog
    },
    data() {
        return {
            selectedUser: null,
            dialogVisible: false
        };
    },
    methods: {
        confirmDelete() {
            if (this.selectedUser) {
                this.dialogVisible = true;
            } 
        },
        deleteUser() {
                alert("Delete");
            // ...
            this.dialogVisible = false; 
        },
        closeDialog() {
            this.dialogVisible = false; 
        }
    }
};
</script>
