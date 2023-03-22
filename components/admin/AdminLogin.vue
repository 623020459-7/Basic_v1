<template>
    <div class="login">
        <h1>Login</h1>
        <form method="post" @submit="login">
            <label for="username">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                    <path fill="currentColor"
                        d="M7.725 2.146c-1.016.756-1.289 1.953-1.239 2.59c.064.779.222 1.793.222 1.793s-.313.17-.313.854c.109 1.717.683.976.801 1.729c.284 1.814.933 1.491.933 2.481c0 1.649-.68 2.42-2.803 3.334C3.196 15.845 1 17 1 19v1h18v-1c0-2-2.197-3.155-4.328-4.072c-2.123-.914-2.801-1.684-2.801-3.334c0-.99.647-.667.932-2.481c.119-.753.692-.012.803-1.729c0-.684-.314-.854-.314-.854s.158-1.014.221-1.793c.065-.817-.398-2.561-2.3-3.096c-.333-.34-.558-.881.466-1.424c-2.24-.105-2.761 1.067-3.954 1.929z">
                    </path>
                </svg>
                <!-- font awesome icon -->
                <i class="fas fa-user"></i>
            </label>
            <input type="text" name="username" placeholder="Username" id="username" ref="username" required>
            <label for="password">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16Zm-72 78.63V184a8 8 0 0 1-16 0v-25.37a24 24 0 1 1 16 0ZM160 80H96V56a32 32 0 0 1 64 0Z">
                    </path>
                </svg>
                <i class="fas fa-lock"></i>
            </label>
            <input type="password" name="password" placeholder="Password" id="password" ref="password" required>
            <input type="submit" value="Login">
        </form>
    </div>
</template>



<script>
import AdminForm from './AdminForm.vue';
import AdminEditForm from './AdminEditForm.vue';

export default {
    middleware: ['auth'],
    components: {
        AdminForm,
        AdminEditForm
    },
    name: 'EntypoUser',
    name: 'PhLockKeyFill',
    // data() {
    //     return {
    //         username: ' ',
    //         password: ' ',
    //     };
    // },

    // computed: {
    //     resultMessageColor() {
    //         switch (this.loginStatus) {
    //             case 'success':
    //                 return 'green'
    //             case 'failure':
    //                 return 'red'
    //             default:
    //                 return ''
    //         }
    //     }
    // },

    data() {
        return {
            username: ' ',
            password: ' '
        }
    },
    methods: {
        // async login(e) {
        //     e.preventDefault();

        //     const payload = {
        //         data: {
        //             username: this.user_name,
        //             password: this.user_password
        //         }
        //     }

        //     try {
        //         await this.$auth.loginWith('local', payload)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },
        async login(e) {
            e.preventDefault();

            const payload = {
                username: this.$refs.username.value,
                password: this.$refs.password.value
            };

            try {
                await this.$auth.loginWith('local', {
                    data: payload
                }
                );
                console.log("============200================")
                this.$router.push('/admin/index2');
            } catch (e) {
                // console.log(error)
                this.$router.push('/');
                console.log("==============xxxxxxxxxxxxxxxxxxxxx==============", e.message)
            }
        }
    }
    // async login() {
    //     const data = { 'username': this.username, 'password': this.password }
    //     console.log(this.username, this.password);
    //     try {
    //         const response = await this.$auth.loginWith('local', { data: data })
    //         console.log(response)
    //         this.$auth.$storage.setUniversal('username', response.data.username)
    //         await this.setUserToken(response.data.access_token, response.data.refresh_token)
    //     } catch (e) {
    //         console.log(e.message)
    //     }
    // }
    //async login() {
    // Dummy request(Succeed/fail after 1 sec.)
    //     const shouldSuccess = true
    //     const url = 'http://localhost:8000/api/user';
    //     axios.post(url).then((res) => this.datas = res.data)
    //     const request = new Promise((resolve, reject) =>
    //         setTimeout(
    //             () => (shouldSuccess ? resolve() : reject(Error('login failure'))),
    //             1000
    //         )
    //     )

    //     try {
    //         await request
    //         this.loginStatus = 'success'
    //         this.resultMessage = 'Login successful'
    //     } catch (e) {
    //         this.loginStatus = 'failure'
    //         this.resultMessage = 'Login failed'
    //     }
    // }


};

</script>

<style>
* {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "segoe ui", roboto, oxygen, ubuntu, cantarell, "fira sans", "droid sans", "helvetica neue", Arial, sans-serif;
    font-size: 16px;
}

/* body {
    background-color: rgb(119, 43, 20);
} */

.login {
    width: 400px;
    background-color: #ffffff;
    box-shadow: 0 0 9px 0 #5b6574;
    margin: 100px auto;
}

.login h1 {
    text-align: center;
    color: #5b6574;
    font-size: 24px;
    padding: 20px 0 20px 0;
    border-bottom: 1px solid #dee0e4;
}

.login form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
}

.login form label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: rgb(119, 43, 20);
    color: #5b6574;
}

.login form input[type="password"],
.login form input[type="text"] {
    width: 310px;
    height: 50px;
    border: 1px solid #dee0e4;
    margin-bottom: 20px;
    padding: 0 15px;
}

.login form input[type="submit"] {
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    background-color: rgb(119, 43, 20);
    border: 0;
    cursor: pointer;
    font-weight: bold;
    color: #ffffff;
    transition: background-color 0.2s;
}

.login form input[type="submit"]:hover {
    background-color: rgb(119, 43, 20);
    transition: background-color 0.2s;
}
</style>