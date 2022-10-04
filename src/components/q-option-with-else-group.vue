<template>
    <div>
        <div class="q-field__label">
            <slot
                v-if="props.labelSlot||props.labelSlot===''"
                name="label"
            ></slot>
            <div v-else>{{props.label}}</div>
        </div>



        <q-option-group
            class="mt-2"
            v-model="_modelValue"
            :options="props.options.map((o)=>({'label':o,'value':o}))"
            color="primary"
            inline
        />

        <q-input
            :ref="(el:any ) => {dataRefs['q-input']=el }"
            @click="_modelValue='';currentOpt=null"
            class="w-full font-['Noto_Serif_TC'] "
            v-model="_modelValue"
            :class="{'hidden-value':!!currentOpt}"
            :rules="props.rules"
            :hint="props.inputHint"
            dense
        >
            <template #before>
                <div class="relative">
                    <div
                        @click="_modelValue='';currentOpt=null;dataRefs['q-input']?.focus();"
                        class="z-10 absolute top-0 left-0 w-full h-full"
                    ></div>
                    <q-radio
                        :modelValue="currentOpt?'':'else'"
                        val="else"
                    >
                        <template #default>
                            <div class="text-sm font-black question-text-color">其他</div>
                        </template>
                    </q-radio>
                </div>

            </template>

        </q-input>
        <div class="">
            <template v-if="props.bottomSlots || props.bottomSlots===''">
                <div class="q-field__bottom">
                    <slot name="hint"></slot>
                </div>
            </template>
            <template v-else>
                <div
                    v-if="props.hint"
                    class="q-field__bottom"
                >
                    {{props.hint}}
                </div>
            </template>
        </div>


    </div>

</template>

<script setup lang="ts">
import { prop } from 'dom7';
import type { ValidationRule } from 'quasar';
import { ref, watch, watchEffect } from 'vue';

interface Props {
    options?: string[];
    modelValue: string;
    inputHint?: string;
    hint?: string;
    rules?: ValidationRule[];
    label?: string;
    labelSlot?: Boolean;
    bottomSlots?: Boolean;
}
const props = withDefaults(defineProps<Props>(), {
    options: () => [],
    modelValue: ''
});
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const _modelValue = ref(props.options.length > 0 ? props.options[0] : '')
emit('update:modelValue', _modelValue.value)
watch(_modelValue, () => {
    emit('update:modelValue', _modelValue.value)
})
const dataRefs = ref<{ [key: string]: any }>({})
const currentOpt = ref<any>(null);
watchEffect(() => {
    currentOpt.value = props.options.indexOf(_modelValue.value) > -1 ? _modelValue.value : null
})




</script>

<style scoped>
:deep(.hidden-value input) {
    opacity: 0;
}
.q-field__bottom {
   font-size: 13px !important;
   line-height: 18px !important;
   color: #333;

}
</style>