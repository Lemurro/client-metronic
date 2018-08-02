<form class="form-inline">
    <button type="button" class="btn btn-primary m-btn--icon" onclick="users.showInsertForm()">
        <span>
            <i class="fas fa-plus"></i>
            <span>Добавить</span>
        </span>
    </button>
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