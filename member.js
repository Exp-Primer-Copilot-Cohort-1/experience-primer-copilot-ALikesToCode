function skillsMember(){
    return {
        restrict: 'e',
        templateurl:'modules/skills/views/member.html',
        controller:'SkillsMemberController',
        controllerAs:'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}