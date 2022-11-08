
import { 
  Edit,
  SimpleForm,
  
TextInput,
AutocompleteInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditAnimal(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="type" variant="outlined"   />
<TextInput source="name" variant="outlined"   />
<TextInput source="color" variant="outlined"   />
<AutocompleteInput variant="outlined" source="animalgender" choices={[
{ id: "Male", name: "Male" },
{ id: "Female", name: "Female" },
]}  />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}