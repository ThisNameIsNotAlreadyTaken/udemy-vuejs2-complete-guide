<template>
    <div class="form-group has-feedback" :class="{ 'has-success': !$v.$invalid, 'has-error': $v.$dirty && $v.$invalid }">
        <label class="col-sm-2 control-label">{{ name }}</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" :placeholder="placeholder || name" @input="$emit('update:value', $event.target.value)" 
                :value="value" @blur="$v.$touch()">
            <span class="glyphicon glyphicon-ok form-control-feedback" v-if="!$v.$invalid" aria-hidden="true"></span>
            <span class="glyphicon glyphicon-remove form-control-feedback" v-if="$v.$dirty && $v.$invalid" aria-hidden="true"></span>
        </div>
        <span class="help-block col-sm-12 text-center" v-if="$v.$dirty && $v.$invalid">
            {{ errorText }}
        </span>
    </div>
</template>

<script>
    export default {
        props: ['$v', 'name', 'value', 'errorText', 'placeholder']
    }
</script>