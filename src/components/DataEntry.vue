<template>
    <div id="data-entry">
        <h2>Data Entry</h2>
        <form action="post">
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="activity-date">Date</label>
                        <input type="date" name="activity-date" id="activity-date" :value="todaysDate">
                    </div>
                    <div class="form-group">
                        <label for="activity-type">Activity</label>
                        <select name="activity-type" id="activity">
                            <option v-for="a in activities" value="a" :key="a">{{ a }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="contact">Contact</label>
                        <select name="contact" id="contact">
                            <option v-for="person in contacts" value="person" :key="person.index">{{ person }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="company">Company</label>
                        <select name="company" id="company">
                            <option v-for="c in companies" value="c" :key="c">{{ c }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="job">Job</label>
                        <select name="job" id="job">
                            <option v-for="j in jobs" value="j" :key="j">{{ j }}</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <label for="notes">Notes</label>
                    <textarea name="notes" id="notes"></textarea>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'DataEntry',
  data() {
      return {
        activities: [
            'Coding Exercise',
            'Interview',
            'Job Fair',
            'Meeting',
            'Networking',
            'Online Search',
            'Other',
            'Phone Call',
            'Submit Application'
        ],
        companies: ['none saved'],
        contacts: ['none saved'],
        jobs: ['none saved'],
      }
  },
  computed: {
      todaysDate() {
          return new Date().toLocaleDateString();
      }
  }
}
</script>

<style lang="scss">

#data-entry {
    background-color: rgb(179, 212, 179);
    border: 0.5rem solid whitesmoke;
    height: 40%;
    width: auto;
    form {
        width: 100%;
        .col {
            width: 50%;
        }
        .form-group {
            display: table-row;
            margin: 0;
            label {
                display: table-cell;
                position: relative;
                text-align: right;
                top: 60%;
                width: 80px;
            }
            input, select {
                display: table-cell;
                border: 0.75px solid black;
                border-radius: 4px;
                left: 12%;
                height: 30px;
                padding: 0 0.25rem;
                position: relative;
                bottom: 20%;
            }
            input {
                width: 164px;
            }
            select {
                width: 170px;
            }
        }
        #notes {
            height: 200px;
        }
    }
}

</style>