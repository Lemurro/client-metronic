<form class="form-inline">
    <button type="button" class="btn btn-primary m-btn--icon" onclick="users.showInsertForm()">
        <span>
            <i class="fas fa-plus"></i>
            <span>Добавить</span>
        </span>
    </button>
    &nbsp;&nbsp;
    <input type="text" class="form-control m-input tablefilter" style="min-width: 300px;" data-tablefilter="#js-users__table" placeholder="Начните вводить для фильтрации">
</form>

<table id="js-users__table" class="table table-hover m--margin-top-20">
    <thead>
        <tr>
            <th class="w1">&nbsp;</th>
            <th class="w1">#</th>
            <th>Идентификатор для входа</th>
        </tr>
    </thead>
    <!-- Динамический контент -->
    <tbody id="js-users__items"></tbody>
</table>