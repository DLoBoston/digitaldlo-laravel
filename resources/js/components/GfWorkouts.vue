<template>
    <div class="table-responsive">
        <h2>Workouts</h2>
        <table id="workouts" class="table">
            <thead>
                <tr>
                  <th scope="col">Workout</th>
                  <th scope="col">Cycle</th>
                  <th scope="col">Date</th>
                  <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><h3 class="text-nowrap">Cardio</span></h3>
                    <td>
                        <div class="text-nowrap">
                            <span class="badge badge-secondary">Week 1</span>
                            <span class="badge badge-secondary">Day 2</span>
                        </div>
                        <span class="badge badge-info">Cycle 1</span>
                    </td>
                    <td>2019/01/01</td>
                    <td>
                        <div class="text-nowrap">
                            <button type="button" class="btn btn-info">Edit</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><h3 class="text-nowrap">531 Bench</h3></td>
                    <td>
                        <div class="text-nowrap">
                            <span class="badge badge-secondary">Week 1</span>
                            <span class="badge badge-secondary">Day 1</span>
                        </div>
                        <span class="badge badge-info">Cycle 1</span>
                    </td>
                    <td>2018/12/28</td>
                    <td>
                        <div class="text-nowrap">
                            <button type="button" class="btn btn-info">Edit</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {

        data () {
            return {
                
            }
        },

        methods: {

        }
    }
</script>