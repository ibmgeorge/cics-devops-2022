<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="./core-min.js"></script>
<script src="./md5-min.js"></script>
<script src="./wildfire-labs.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

## Welcome

Thank you for attending the workshop. 
  
Click [here](https://github.com/ibmgeorge/cics-devops-2022/tree/gh-pages/presentations){:target="_blank"} to download the presentation.

## Accessing the hands-on 

All lab instances are available for 2 calendar days after the workshop finishes and can be accessed from Internet.

Click [here](Remote Desktop Windows.pdf){:target="_blank"} to read the instruction for Remote Desktop access.

All lab instructions are in the "Labs" folder on your remote desktop, or can be downloaded from [here](https://github.com/ibmgeorge/cics-devops-2022/tree/gh-pages/labs){:target="_blank"} to view it locally.

**Please enter your 4 digit machine id assigned to you to retrieve your unique log in details.**

<form onsubmit="return false;">
<div class="input-group mb-3 col-6">
<span class="input-group-text" id="basic-addon1">#</span>
<input type="text" class="form-control" placeholder="Machine ID" aria-label="Machine ID" aria-describedby="basic-addon1" id="instance-id" maxlength="4" required oninput="validate();">
</div>
<div class="col-6">
<button id="btn-submit" class="btn btn-primary" type="submit" onclick="getLab(document.getElementById('instance-id').value)" disabled>Submit</button>
</div>
</form>
<div id="lab" class=".container .text-monospace">
<em>Note you will need a confirmed registration to access the lab.</em>
</div>

## Contact
Having trouble with labs? Send an email to [George Ge](mailto: ypge@au1.ibm.com) and we will help you sort it out.
