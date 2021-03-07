<template>
    <div class="home">
        <div class="card p-2">
            <div class="row">
                <svg class="col-3 bd-placeholder-img" width="60px" height="60px" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <rect width="60px" height="60px" fill="#eee" />
                </svg>
                <div class="col-7  align-items-center text-left">
                    <div class=""> {{whisper.name}}<span class="mr-auto text-muted"> @{{whisper.uid}}</span></div>
                    <h5 class="card-text"> {{whisper.content}}</h5>
                </div>
                <div class="col-2 align-self-center m-0">
                    <div class="btn btn-outline-primary">!</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        db
    } from '../main'

    export default {
        props: ['id', 'uid'],
        data() {
            return {
                whisper: {},
                user: {}
            }
        },
        firestore() {
            return {
                whisper: db.collection('whispers').doc(this.$props.id),
                user: db.collection('users').doc(this.$props.uid)
            }
        }
    }
</script>