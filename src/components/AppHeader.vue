<template>
    <div class="app-header">
        <header>
            <h1>Job Search Tracker</h1>
        </header>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss">

.app-header {
    background-color: rgba(50, 100, 75, 0.5);
    color: white;
    display: flex;
    flex-direction: column;
    height: 14%;
    justify-content: center;
    padding: 1rem;
    header {
        width: 100%;
    }
    nav {
        ul {
            list-style: none;
            padding: 0;
            li {
                display: inline-flex;
                margin-left: 2rem;
                a {
                    color: white;
                }
            }
        }
    }
}

</style>