exports.up = async knex => {
  await knex.schema.dropTableIfExists('phone-numbers')
  await knex.schema.createTable('phone-numbers', table => {
    table.increments('id').primary()

    table.string('number', 11)
      .notNullable()
  })
}

exports.down = async knex => {
  await knex.raw('SET FOREIGN_KEY_CHECKS=0')
  await knex.schema.dropTableIfExists('exam_groups')
  await knex.raw('SET FOREIGN_KEY_CHECKS=1')
}
