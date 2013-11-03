object @current

attributes(:id, :name, :email)
child(:projects) do
  attributes(:id, :name, :team_id) 
  child(:tasks) { attributes *Task.column_names }
end

child(:tasks) { attributes *Task.column_names }
