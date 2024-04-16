import React from 'react';

const CheckboxField = () => {
  return (
    <div>
        <div>Your best Subject</div>

        <input type="checkbox" name="language" id="sub1" value="Math"  checked/>
        <label for="Math">Math</label>

        <input type="checkbox" name="language" classsName="sub2" id="" />
        <label for="Math">Math</label>

        <input type="checkbox" name="language" classsName="sub3" />
        <label for="Math">Math</label>
    </div>
  )
}

export default CheckboxField;
